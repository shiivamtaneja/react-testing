import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json([
      {
        name: "Shivam",
      },
      {
        name: "Ervin Howell",
      },
      {
        name: "Clementine Bauch",
      },
    ], { status: 200 });
  })
]