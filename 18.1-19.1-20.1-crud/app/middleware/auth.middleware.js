export const authProduct = (req, res, next) => {
  const allowed = ["name", "category", "isActive", "details"];
  const musts = ["name", "category", "details"];
  const keys = Object.keys(req.body);
  const validAllowed = keys.every((key) => allowed.includes(key));
  const validMusts = musts.every((must) => keys.includes(must));
  if (!validAllowed || !validMusts) {
    return res.status(400).send({
      error:
        "Wrong properties! must provide exactly name, category and details only and isActive optional",
    });
  }

  const detailAllowed = [
    "description",
    "price",
    "discount",
    "images",
    "phone",
    "dateAdded",
  ];
  const detailMusts = ["description", "price", "images", "phone"];
  const detailKeys = Object.keys(req.body.details);
  const detailValidAllowed = detailKeys.every((key) =>
    detailAllowed.includes(key)
  );
  const detailValidMusts = detailMusts.every((must) =>
    detailKeys.includes(must)
  );
  if (!detailValidAllowed || !detailValidMusts) {
    return res.status(400).send({
      error:
        "Wrong properties of details! must provide exactly description, price, images and phone only and discount or dateAdded are optional",
    });
  }
  if (
    !Array.isArray(req.body.details.images) ||
    req.body.details.images.length < 2
  ) {
    return res.status(400).send({
      error: "Images must be an array that has least 2 images!",
    });
  }
  next();
};

export const authMinMax = (req, res, next) => {
  if (!req.body.min || !req.body.max) {
    return res
      .status(400)
      .send({ error: "Must provide min and max range in body" });
  } else if (
    typeof req.body.min !== "number" ||
    typeof req.body.max !== "number"
  ) {
    return res.status(400).send({ error: "min and max must be numbers!" });
  }
  next();
};

export const authUpdate = (req, res, next) => {
  const allowed = ["isActive", "details"];
  const keys = Object.keys(req.body);
  const validAllowed = keys.every((key) => allowed.includes(key));

  if (!validAllowed) {
    return res
      .status(400)
      .send({ error: "Can only update isActive or discount" });
  }
  if (req.body.details) {
    const detailAllowed = ["discount"];
    const detailKeys = Object.keys(req.body.details);
    const detailValid = detailKeys.every((key) => detailAllowed.includes(key));
    if (!detailValid) {
      return res
        .status(400)
        .send({ error: "Can only discount within details!" });
    }
  }
  next();
};
