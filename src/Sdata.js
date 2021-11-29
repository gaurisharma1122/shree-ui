import local from "../src/images/img21.jpg";
import remote from "../src/images/img21.jpg";
import list from "../src/images/img21.jpg";

const Sdata = [
  {
    imgsrc: local,
    title: "Local Tunnel",
    text: "",
    buttonText: "Create Local Tunnels",
    action: "local_tunnel"
  },
  {
    imgsrc: remote,
    title: "Remote Tunnel",
    text: "",
    buttonText: " Create Remote Tunnels",
    action: "remote_tunnel"
  },
  {
    imgsrc: list,
    title: "List Tunnels",
    text: "",
    buttonText: " View Tunnels",
    action: "list_tunnel"
  },
];

export default Sdata;
