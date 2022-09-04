// ---- Config ----
var type = "top-left"

// ---- CODE ----
const fm = FileManager.local()

if (!config.runsInWidget) {
  const sizes = {
    size: 310,
    left: 46,
    right: 394,
    top: 142,
    middle: 522,
    bottom: 902
  }

  let crop = { w: "", h: "", x: "", y: "" }
  crop.w = sizes.size
  crop.h = sizes.size

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
  
  draw.drawImageAtPoint(img,new Point(-rect.x - img.width / 2, -rect.y - img.height / 2))  
  return draw.getImage()
}

// ---- WidgetCode ----
let widget = new ListWidget()
widget.backgroundImage = fm.readImage(fm.joinPath(fm.documentsDirectory(), type + ".png"))
Script.setWidget(widget)
Script.complete()