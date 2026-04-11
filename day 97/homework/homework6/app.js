// import { init } from ‘./service.js’;
// init();

//ახლა ყველაფერი მოვაქციოთ app.js-ში

import { log } from './logger.js';
import { user } from './user.js';
import { init } from './service.js';

log("Getting user...");
init(user);