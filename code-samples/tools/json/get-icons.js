let data = collection.getIcons(['arrow-left', 'arrow-right', 'home']);
fs.writeFileSync('bundle.json', JSON.stringify(data), 'utf8');
