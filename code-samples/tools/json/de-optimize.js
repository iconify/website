let data = JSON.parse(fs.readFileSync('ant-design.json', 'utf8'));
Collection.deOptimize(data);
