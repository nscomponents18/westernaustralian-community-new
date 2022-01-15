## Getting Started
*Using Node v 14*
### In the Root Directory

`touch npm-shrinkwrap.json`

Open the file you just created and add the following code:

```
{
    "dependencies": {
        "graceful-fs": {
            "version": "4.2.2"
        }
    }
}
```

Run `npm install`

After finishing, you may now run `gulp`