const {app, BrowserWindow} = require ('electron')






var mainwindow=null
async function createWindow(){
mainwindow= new BrowserWindow({
    width:800,
    height:600
})

await mainwindow.loadFile('src/pages/index.html')


// template menu

const templatemenu=[
    {
        label:'file'
        
    
    }
    
    ]

}

const menu=Menu.buildFromTemplate(templateMenu)
Menu.setApplicationMenu(menu)


app.whenReady().then(createWindow)

