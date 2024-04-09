import HoverEffect from "../Components/ui/card-hover-effect";
import one from "../Images/gallary_1.jpg";
import two from "../Images/gallary_2.jpg"; // Assuming you have different images for each item
import three from "../Images/gallary_3.jpg";
import four from "../Images/gallary_4.jpg";
import five from "../Images/gallary_5.jpg";
import six from "../Images/gallary_6.jpg";

export default function Home_Product_Gallary() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    image: one, // Using the lowercase 'image' property
    title: "Project One",
    description:
      "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",
  },

  {
    image: three,
    title: "Project Three",
    description:
      "A muffin is an individually portioned baked product; however, the term can refer to one of two distinct items: a part-raised flatbread (like a crumpet) that is baked and then cooked on a griddle (typically unsweetened), or a (often sweetened) quickbread that is chemically leavened and then baked in a mold.",
  },
  {
    image: six,
    title: "project Six",
    description:
      "A pancake is a breakfast dish, a flat cake that's made by pouring batter into a hot pan and frying it on both sides. Many people like to eat their pancakes with a drizzle of maple syrup. While pancakes can be savory, they're more often a sweet breakfast food in the US.",
  },
  ,
  {
    image: two,
    title: "Project Two",
    description:
      "A muffin is an individually portioned baked product; however, the term can refer to one of two distinct items: a part-raised flatbread (like a crumpet) that is baked and then cooked on a griddle (typically unsweetened), or a (often sweetened) quickbread that is chemically leavened and then baked in a mold.",
  },
  {
    image: five,
    title: "Project Five",
    description:
      "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.",
  },

  {
    image: four,
    title: "Project Four",
    description:
      "Dry cake is cake that lacks moisture for one reason or another. A moist cake has a tender crumb and is light, fluffy, and bouncy. Professional bakers spend time and energy learning how to prevent a dry cake and how to fix a cake if it does dry out.",
  },
];
