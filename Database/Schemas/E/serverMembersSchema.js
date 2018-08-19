const Schema = require("./Schema");

module.exports = new Schema({
	_id: {
		type: String,
		required: true,
	},
	messages: {
		type: Number,
		default: 0,
		min: 0,
	},
	voice: {
		type: Number,
		default: 0,
		min: 0,
	},
	rank: {
		type: String,
		default: "No Rank",
	},
	rank_score: {
		type: Number,
		default: 0,
		min: 0,
	},
	afk_message: String,
	last_active: Date,
	cannotAutokick: {
		type: Boolean,
		default: false,
	},
	strikes: [new Schema({
		// User ID
		_id: {
			type: String,
			required: true,
		},
		reason: {
			type: String,
			required: true,
			maxlength: 2000,
		},
		timestamp: {
			type: Date,
			default: Date.now,
		},
		modlog_entry: {
			type: Number,
		},
	})],
	profile_fields: Schema.Mixed,
	muted: [new Schema({
		_id: {
			type: String,
			required: true,
		},
		since: {
			type: Date,
			default: Date.now,
		},
	})],
});
