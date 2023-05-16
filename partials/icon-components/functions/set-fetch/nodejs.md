Older versions of Node.js do not support Fetch API. It is available in Node.js version 17 using flag `[str]--experimental-fetch`, but without it, Fetch API is not available.
That means the icon component cannot retrieve icon data from Iconify API when used on a server side in Node.js environment.
