export default defineEventHandler(async (event) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return sendError(
    event,
    createError({ statusCode: 500, statusMessage: "Server error" })
  );
  return [
    {
      id: 1,
      title: "Learn Turkish",
      done: false,
    },
    {
      id: 2,
      title: "Cook lunch",
      done: true,
    },
  ];
});
