// ---- Config ----
var type = "top-left"

// ---- CODE ----
const fm = FileManager.local()

if (!config.runsInWidget) {
  // 1792 * 828
  const sizes = {
    small:  338,
    left:   54,
    right:  436,
    top:    160,
    middle: 580,
    bottom: 1000
  }

  let crop = { w: "", h: "", x: "", y: "" }
  crop.w = sizes.small
  crop.h = sizes.small

  let keys = type.split("-")
  crop.y = sizes[keys[0]]
  crop.x = sizes[keys[1]]

  let image = cropImage(args.images[0], new Rect(crop.x,crop.y,crop.w,crop.h))
  fm.writeImage(fm.joinPath(fm.documentsDirectory(), type + ".png"), image)
  Script.complete()
}

// Crop an image into the specified rect.
function cropImage(img,rect) {
   
  let draw = new DrawContext()
  draw.size = new Size(rect.width, rect.height)
  
  draw.drawImageAtPoint(img,new Point(-rect.x - (img.width - 828) / 2, -rect.y - (img.height - 1792) / 2))  
  return draw.getImage()
}

// ---- WidgetCode ----
let widget = new ListWidget()
widget.backgroundImage = fm.readImage(fm.joinPath(fm.documentsDirectory(), type + ".png"))
Script.setWidget(widget)
Script.complete()