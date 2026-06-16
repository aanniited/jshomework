
import Card from "./card"
import imageone from "../assets/1.jpg"
import imagesecond from "../assets/2.jpg"
import imagethird from "../assets/3.jpg"
import "../App.css"

const data = [
  {
    id: 1,
    name: "გაუჩინარება",
    auth: "ანა ჯღარკავა",
    image: imageone,
    description: "ახალგაზრდა ქალის ამბავი, რომელიც საკუთარ თავს ეძებს და ცდილობს წარსულს გაექცეს."
  },
  {
    id: 2,
    name: "სასწაულების თვლა",
    auth: "ნიკოლას სპარქსი",
    image: imagesecond,
    description: "ყოფილი სამხედრო ტანერი ბებიის გარდაცვალების შემდეგ მიდის პატარა ქალაქში, სადაც ეძებს უცნობ მამას და მოულოდნელად სიყვარულს პოულობს."
  },
  {
    id: 3,
    name: "წიგნის ქურდი",
    auth: "მარკეს ზუზაკი",
    image: imagethird,
    imgStyle: { objectPosition: 'center center' }, // ეს მხოლოდ მესამეს სჭირდება
    description: "მეორე მსოფლიო ომის გერმანიაში გოგონა ლიზელი წიგნების სიყვარულით უმკლავდება ომს."
  }
];

// 2. კომპონენტში ვიყენებთ .map() ფუნქციას
const CardList = () => {
  return (
    <div className="card-list">
      {data.map((book) => (
        <Card 
          key={book.id} 
          name={book.name}
          auth={book.auth}
          image={book.image}
          description={book.description}
          
          onPress={() => console.log(`წიგნი: ${book.name}, ავტორი: ${book.auth}`)}
        />
      ))}
    </div>
  );
};

export default CardList;