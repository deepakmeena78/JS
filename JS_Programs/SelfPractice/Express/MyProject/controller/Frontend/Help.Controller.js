import Help from "../../module/Help.module.js";

export const CreateHelp = async (req, res) => {
    try {
        const { title, description, category, location, postedby } = req.body;
        const result = await Help.create({ title, description, category, location, postedby });
        if (result) {
            return res.status(200).json({ msg: "Help Created Successfully", result });
        }
        return res.status(400).json({ msg: "Invalid Data. Help creation failed." });
    } catch (error) {
        console.error("CREATE HELP ERROR:", error);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

// export const 