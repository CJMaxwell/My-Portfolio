const mountRoutes = (app, routes) => {
  Object.values(routes).forEach(route => {
    app.use("/api/v1", route);
  });
};

export default mountRoutes;
