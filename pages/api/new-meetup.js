// /api/new=meetup  this would be the URL of this file and if a request,
// is sent to this URL, it will trigger the function wich we have to define in this file

// (req) The request object contains data about incoming request
// (res) The response object will be needed for sending back a response

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body; // .body => The body field is another build in field wich contains the body of the incoming request, the data of the incoming request

    const { title, image, address, description } = data;
  }
}

export default handler;
