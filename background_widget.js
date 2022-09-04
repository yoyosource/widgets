// ---- Links ----
// https://docs.scriptable.app/
// https://gist.github.com/mzeryck/3a97ccd1e059b3afa3c6666d27a496c9
// https://github.com/mzeryck/Widget-Blur
// https://www.makeuseof.com/custom-transparent-widgets-iphone/

// ---- Config ----
var type = "top-left"

// ---- CODE ----
const fm = FileManager.local()

if (!config.runsInWidget && !config.runsInApp) {
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
}

// Crop an image into the specified rect.
function cropImage(img,rect) {
   
  let draw = new DrawContext()
  draw.size = new Size(rect.width, rect.height)
  
  draw.drawImageAtPoint(img,new Point(-rect.x-1, -rect.y-3))
  return draw.getImage()
}

// ---- WidgetCode ----
let widget = new ListWidget()
widget.backgroundImage = fm.readImage(fm.joinPath(fm.documentsDirectory(), type + ".png"))
Script.setWidget(widget)
Script.complete()