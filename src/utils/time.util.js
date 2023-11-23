import moment from "moment-timezone";

// Contance
const time = moment.tz(Date.now(), "Asia/Ho_Chi_Minh");
const timed = time.format("DD-MM-YYYY HH:mm:ss");

const timeCreated = {
    createdAt: { type: String, default: timed },
};

const timeUpdated = {
    updatedAt: { type: String, default: timed },
};

export { timeCreated, timeUpdated };
