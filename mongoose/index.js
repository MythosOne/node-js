require("dotenv").config();

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.DB_URI);

  console.log("Connected to MongoDB");

  const bookSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        match: /^[A-Z]{1,1}[A-Za-z0-9 ,.'-]{1,255}$/,
      },
      author: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true,
        default: 2000,
      },
      genre: {
        type: String,
        required: true,
        enum: ["Education", "Developments"],
      },
    },
    { versionKey: false, timestamps: true }
  );

  const Book = mongoose.model("books", bookSchema);

  // !Create a new book
  //   const res = await Book.create({
  //     title: "Rethinking Productivity in Software Engineering",
  //     author: "Caitlin Sadowski, Thomas Zimmermann",
  //     genre: "Education",
  //     year: 2008,
  //   });

  //! Find all books
  // const res = await Book.find({});

  //! Find author books
  // const res = await Book.find({author: "Addy Osmani", year: 1998});

  //! Find author by id
  // const res = await Book.findOne({author: "Addy Osmani"});
  // const res = await Book.findOne({_id: "66db50973a734c10b8badaff"});
  // const res = await Book.findById("66db50973a734c10b8badaf2");

  //! Update book
  // const res = await Book.findOneAndUpdate({_id: "66db50973a734c10b8badaff"}, {year: 2020}, {new: true});
  //   const res = await Book.findByIdAndUpdate(
  //     "66db50973a734c10b8badaff",
  //     { genre: "education" },
  //     { year: 2022 },
  //     { new: true }
  //   );

  //! Delete book
  //   const res = await Book.findByIdAndDelete("66db50973a734c10b8badaff");

  //! Regular expression
  const res = await Book.find({ title: { $regex: /Learning/, $options: "i" } });

  console.log(res);
}

main().catch((err) => console.error(err));
