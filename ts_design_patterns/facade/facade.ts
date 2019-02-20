import { JsonPlaceholderFacade } from './json-placeholder-facade'
import { JsonPlaceholderService } from './json-placeholder-service'

const facade = new JsonPlaceholderFacade(new JsonPlaceholderService())
facade.getUser(1).then(user => {
	if (user) {
		console.log(user)
	}
})

// const json = new JsonPlaceholderService()
// json.getUsers().then(console.log)