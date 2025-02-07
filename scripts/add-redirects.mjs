import { cwd } from "node:process";
import { resolve } from "node:path";
import { lstatSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";

const rootFolder = cwd();
const distFolder = resolve(rootFolder, "dist");

/** @type {Set<string>} */
const files = new Set();

/** @type {Set<string>} */
const dirs = new Set();

/**
 * Scan directory
 *
 * @param {string} parent
 */
function scanDir(parent) {
  const dir = distFolder + parent;
  readdirSync(dir).forEach((item) => {
    if (item.startsWith(".")) return;

    const filename = `${dir}/${item}`;
    const stat = lstatSync(filename);
    if (stat.isDirectory()) {
      dirs.add(`${parent}/${item}`);
      scanDir(`${parent}/${item}`);
      return;
    }

    if (item.endsWith(".html")) {
      files.add(`${parent}/${item}`);
    }
  });
}
scanDir("");

// Check all .html files
let count = 0;
files.forEach((file) => {
  if (file.endsWith(".html") && !file.endsWith("/index.html")) {
    // Redirect from /file to /file.html by creating /file/index.html
    const newDirectory = file.slice(0, -5);
    if (files.has(newDirectory + "/index.html")) {
      return;
    }

    try {
      mkdirSync(distFolder + newDirectory);
    } catch (err) {
      //
    }

    const redirectFile = newDirectory + "/index.php";
    // console.log('Redirecting from "' + redirectFile + '" to "' + file + '"');
    count++;
    writeFileSync(
      distFolder + redirectFile,
      `<?php

function redirect($url, $permanent = true)
{
    $code = $permanent ? 302 : 301;
    if (!$permanent) {
        header('Connection: close');
        header('Pragma: no-cache');
        header('Cache-Control: no-cache');
        header('Expires: Thu Jan  1 00:00:00 1970');
    }
    header('HTTP/1.1 ' . $code . ' Moved');
    header('Status: ' . $code . ' Moved');
    header('Location: ' . $url);
    echo '<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>' . $code . ' Redirect</title>
</head><body>
<p>Page has moved to new location. <a href="' . $url . '">Click here</a> if browser does not automatically redirect you.</p>
</body></html>';
    exit;
}

redirect('${file}');
`,
      "utf8"
    );
  }
});

console.log("Added", count, "redirects");
