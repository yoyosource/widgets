// ---- Config ----
var type = "top-left"

// ---- CODE ----
const fm = FileManager.local()

const sizes = {
  size: 310,
  left: 46,
  right: 394,
  top: 142,
  middle: 522,
  bottom: 902
}

if (config.runsInActionExtension) {
  // TODO: Create image
  return
}

let widget = new ListWidget()
widget.backgroundImage = fm.readImage(fm.joinPath(fm.documentsDirectory(), type + ".png"))
