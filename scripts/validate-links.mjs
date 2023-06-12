import { resolve, dirname, join } from 'node:path'
import { readFileSync } from 'node:fs'
import fg from 'fast-glob'
import { load } from 'cheerio'

const rootFolder = process.cwd()
const distFolder = resolve(rootFolder, 'dist')

// Find all HTML files
fg('**/*.html', { cwd: distFolder }).then(/**string[]*/ rawFiles => {
    if (!rawFiles.length)
        throw new Error('Build dist package before running links checker')

    // Normalise links
    const files = rawFiles.map(file => file.replace(/\\/g, '/'))

    // Convert to set for faster lookup
    const set = new Set(files);

    // Parse all html files
    let gotErrors = 0;
    files.forEach(file => {
       const content = readFileSync(`${distFolder}/${file}`, 'utf8')

        const $html = load(content, {
            lowerCaseAttributeNames: false,
            _useHtmlParser2: true,
        })

        // Find all links
        $html('a').each((index, link) => {
            const $link = $html(link)
            const href = $link.attr('href')
            if (!href || href.startsWith('https://'))
                return

            // Remove parameters and hash
            let baseLink = href.split(/[#?]/).shift()
            if (!baseLink)
                return // Local link with hash

            // Append .html
            if (baseLink.endsWith('/')) {
                baseLink += 'index.html'
            }
            if (!baseLink.endsWith('.html')) {
                console.error(`Bad link "${href}" in "${file}"`)
                gotErrors ++
                return
            }

            // Get absolute link
            if (baseLink.startsWith('.')) {
                baseLink = '/' + join(dirname(file), baseLink).replace(/\\/g, '/')
            }
            if (!baseLink.startsWith('/')) {
                console.error(`Bad link "${href}" in "${file}"`)
                gotErrors ++
                return
            }
            baseLink = baseLink.slice(1)

            // Check if target exists
            if (!set.has(baseLink)) {
                console.error(`Bad link "${href}" in "${file}"`)
                gotErrors ++
            }
        })
    });

    if (gotErrors)
        throw new Error(`Found ${gotErrors} bad links`)
}).catch(console.error)
