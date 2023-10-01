const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const morgan = require('morgan');
const port = 5000
const asyncHandler = require('express-async-handler');

//links
const genshinImpactLinks = require("./genshinLinks.json")

let count = 0;

app.use(express.static('public'));

app.get("/", function(req, res) {
	res.sendFile(path.join(`${__dirname}/pages/index.html`));
});

app.use(morgan('combined'));


app.get('/api', asyncHandler(async (req, res) => {
	const type = req.query.type;
	if (type === 'genshin') {
		//media
		const genshinLinks = [
			`https://images.alphacoders.com/116/thumbbig-1169181.webp`,
			`https://images.alphacoders.com/115/thumbbig-1150213.webp`,
			`https://images5.alphacoders.com/129/thumbbig-1292433.webp`,
			`https://images4.alphacoders.com/129/thumbbig-1297318.webp`,
			`https://images7.alphacoders.com/110/thumbbig-1108497.webp`,
			`https://images5.alphacoders.com/120/thumbbig-1200477.webp`,
			`https://images2.alphacoders.com/110/thumbbig-1109233.webp`,
			`https://images5.alphacoders.com/112/thumbbig-1123013.webp`,
			`https://images.alphacoders.com/111/thumbbig-1112818.webp`,
			`https://images2.alphacoders.com/106/thumbbig-1064544.webp`,
			`https://images.alphacoders.com/110/thumbbig-1109227.webp`,
			`https://images4.alphacoders.com/110/thumbbig-1108136.webp`,
			`https://images.alphacoders.com/113/thumbbig-1131281.webp`,
			`https://images7.alphacoders.com/110/thumbbig-1107308.webp`,
			`https://images5.alphacoders.com/110/thumbbig-1109232.webp`,
			`https://images3.alphacoders.com/113/thumbbig-1132526.webp`,
			`https://images.alphacoders.com/112/thumbbig-1123246.webp`,
			`https://images3.alphacoders.com/110/thumbbig-1102108.webp`,
			`https://images3.alphacoders.com/111/thumbbig-1112566.webp`,
			`https://images7.alphacoders.com/111/thumbbig-1110664.webp`,
			`https://images6.alphacoders.com/112/thumbbig-1123014.webp`,
			`https://images6.alphacoders.com/110/thumbbig-1109223.webp`,
			`https://images5.alphacoders.com/109/thumbbig-1099191.webp`,
			`https://images5.alphacoders.com/110/thumbbig-1107810.webp`,
			`https://images2.alphacoders.com/113/thumbbig-1130753.webp`,
			`https://images4.alphacoders.com/112/thumbbig-1129086.webp`,
			`https://images5.alphacoders.com/111/thumbbig-1117355.webp`,
			`https://images8.alphacoders.com/111/thumbbig-1110665.webp`,
			`https://images3.alphacoders.com/110/thumbbig-1105694.webp`,
			`https://images7.alphacoders.com/114/thumbbig-1145723.webp`,
			`https://images4.alphacoders.com/110/thumbbig-1107815.webp`,
			`https://images6.alphacoders.com/117/thumbbig-1173817.webp`,
			`https://images3.alphacoders.com/111/thumbbig-1119577.webp`,
			`https://images3.alphacoders.com/111/thumbbig-1119577.webp`,
			`https://images.alphacoders.com/110/thumbbig-1109789.webp`,
			`https://images4.alphacoders.com/113/thumbbig-1130246.webp`,
			`https://images8.alphacoders.com/112/thumbbig-1121698.webp`,
			`https://images8.alphacoders.com/111/thumbbig-1115544.webp`,
			`https://images7.alphacoders.com/110/thumbbig-1109284.webp`,
			`https://images6.alphacoders.com/110/thumbbig-1107809.webp`,
			`https://images8.alphacoders.com/111/thumbbig-1114939.webp`,
			`https://images8.alphacoders.com/117/thumbbig-1171270.webp`,
			`https://images3.alphacoders.com/112/thumbbig-1125113.webp`,
			`https://images3.alphacoders.com/112/thumbbig-1123012.webp`,
			`https://images5.alphacoders.com/110/thumbbig-1108905.webp`,
			`https://images7.alphacoders.com/112/thumbbig-1129597.webp`,
			`https://images7.alphacoders.com/116/thumbbig-1161810.webp`,
			`https://images5.alphacoders.com/115/thumbbig-1158628.webp`,
			`https://images.alphacoders.com/113/thumbbig-1134204.webp`,
			`https://images6.alphacoders.com/113/thumbbig-1132140.webp`,
			`https://images7.alphacoders.com/110/thumbbig-1109220.webp`,
			`https://images.alphacoders.com/120/thumbbig-1200619.webp`,
			`https://images6.alphacoders.com/111/thumbbig-1114887.webp`,
			`https://images6.alphacoders.com/111/thumbbig-1111564.webp`,
			`https://images.alphacoders.com/110/thumbbig-1109224.webp`,
			`https://images5.alphacoders.com/114/thumbbig-1145178.webp`,
			`https://images7.alphacoders.com/114/thumbbig-1144794.webp`,
			`https://images3.alphacoders.com/112/thumbbig-1126757.webp`,
			`https://images4.alphacoders.com/112/thumbbig-1126563.webp`,
			`https://images5.alphacoders.com/110/thumbbig-1109806.webp`,
			`https://images2.alphacoders.com/110/thumbbig-1107816.webp`
		];

		const randomIndex = Math.floor(Math.random() * genshinLinks.length);

		//random number
		const min = 1000000;
		const max = 9999999;
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

		res.json({ message: genshinLinks[randomIndex], color: `${randomNumber}` });
	}

//-----------------------------------------------------------------------------------------
		
	if (type === 'overwatch') {
		//media
		const overwatchLinks = [
			"https://example.com"
		];

		const randomIndex = Math.floor(Math.random() * overwatchLinks.length);

		//random number
		const min = 1000000;
		const max = 9999999;
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

		
		res.json({message: overwatchLinks[randomIndex], color: `${randomNumber}`});
	}
}));


app.use((req, res, next) => {
	res.status(404)
	res.json({error: "404", message: "Your request has not found on the website"})
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})