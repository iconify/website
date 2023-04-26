<?php
/**
 * This is a simple example for creating icon bundles for Iconify SVG Framework.
 *
 * It bundles only icons from Iconify icon sets.
 * For bundling custom icons see other code examples in documentation.
 */

require './vendor/autoload.php';

// Installation: composer require iconify/json-tools iconify/json
use Iconify\JSONTools\Collection;

// File to save bundle to
$target = 'assets/icons-bundle.js';

// Icons to bundle, array
$icons = [
    'mdi:home',
    'mdi:account',
    'mdi:login',
    'mdi:logout',
    'openmoji:birthday-cake',
    'openmoji:clinking-glasses',
];

// Organize icons by prefix
$icons = organizeIconsList($icons);

// Load icons data
$output = '';
foreach ($icons as $prefix => $iconsList) {
    // Load icon set
    $collection = new Collection($prefix);
    if (!$collection->loadIconifyCollection($prefix)) {
        throw new Error(
            'Icons with prefix "' . $prefix . '" do not exist in Iconify. Update iconify/json?'
        );
    }

    // Make sure all icons exist
    foreach ($iconsList as $name) {
        if (!$collection->iconExists($name)) {
            // Uncomment next line to throw error if an icon does not exist
            // throw new Error('Could not find icon: "' . $prefix . ':' . $name . '"');
            echo 'Could not find icon: "', $prefix, ':', $name, "\"\n";
        }
    }

    // Get data for all icons as string
    $output .= $collection->scriptify([
        'icons' => $iconsList,
        'callback' => 'add',
        'optimize' => true,
    ]);
}

// Wrap in custom code that checks for Iconify.addCollection and IconifyPreload
$output = '(function() { 
	function add(data) {
		try {
			if (typeof self.Iconify === \'object\' && self.Iconify.addCollection) {
				self.Iconify.addCollection(data);
				return;
			}
			if (typeof self.IconifyPreload === \'undefined\') {
				self.IconifyPreload = [];
			}
			self.IconifyPreload.push(data);
		} catch (err) {
		}
	}
	' . $output . '
})();' . "\n";

// Save to file
file_put_contents($target, $output);

echo 'Saved ', $target, ' (', strlen($output), " bytes)\n";

/**
 * Organize icons list by prefix
 *
 * Result is an object, where key is prefix, value is array of icon names
 */
function organizeIconsList($icons)
{
    $results = [];

    foreach ($icons as $str) {
        // Split icon to prefix and name
        $icon = stringToIcon($str);
        if ($icon === null || $icon['provider'] !== '') {
            // Invalid name or icon name has provider.
            // All icons in this example are from Iconify, so providers are not supported.
            throw new Error('Invalid icon name: ' . $str);
        }

        $prefix = $icon['prefix'];
        $name = $icon['name'];

        // Add icon to results
        if (!isset($results[$prefix])) {
            $results[$prefix] = [$name];
            continue;
        }
        if (!in_array($name, $results[$prefix])) {
            $results[$prefix][] = $name;
        }
    }

    return $results;
}

/**
 * Convert icon name from string to object.
 *
 * Object properties:
 * - provider (ignored in this example)
 * - prefix
 * - name
 *
 * This function was converted to PHP from @iconify/utils/src/icon/name.ts
 * See https://github.com/iconify/iconify/blob/main/packages/utils/src/icon/name.ts
 */
function stringToIcon($value)
{
    $provider = '';
    $colonSeparated = explode(':', $value);

    // Check for provider with correct '@' at start
    if (substr($value, 0, 1) === '@') {
        // First part is provider
        if (count($colonSeparated) < 2 || count($colonSeparated) > 3) {
            // "@provider:prefix:name" or "@provider:prefix-name"
            return null;
        }
        $provider = substr(array_shift($colonSeparated), 1);
    }

    // Check split by colon: "prefix:name", "provider:prefix:name"
    if (count($colonSeparated) > 3 || !count($colonSeparated)) {
        return null;
    }
    if (count($colonSeparated) > 1) {
        // "prefix:name"
        $name = array_pop($colonSeparated);
        $prefix = array_pop($colonSeparated);
        return [
            // Allow provider without '@': "provider:prefix:name"
            'provider' => count($colonSeparated) > 0 ? $colonSeparated[0] : $provider,
            'prefix' => $prefix,
            'name' => $name,
        ];
    }

    // Attempt to split by hyphen: "prefix-name"
    $hyphenSeparated = explode('-', $colonSeparated[0]);
    if (count($hyphenSeparated) > 1) {
        return [
            'provider' => $provider,
            'prefix' => array_shift($hyphenSeparated),
            'name' => implode('-', $hyphenSeparated),
        ];
    }

    return null;
}
