import Home from "./Home.svelte"
import FrontEnd from "./FrontEnd.svelte"
import BackEnd from "./BackEnd.svelte"
import DevSecOps from "./DevSecOps.svelte"
import Others from "./Others.svelte"
import NotFound from "./NotFound.svelte"

export const routes = {
	"/": Home,
	"/front-end": FrontEnd,
	"/back-end": BackEnd,
	"/dev-sec-ops": DevSecOps,
	"/others": Others,
	"*": NotFound
}
