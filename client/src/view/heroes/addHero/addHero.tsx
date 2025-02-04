import useAddHeroVM from "./addHeroVM"

function AddHero() {
  const {onSubmitHero} = useAddHeroVM();
  return (
    <form className="addHero" onSubmit={onSubmitHero}>
      <input type="text" id="name" placeholder="Enter hero name" />
      <input type="text" id="imageUrl" placeholder="Enter hero image URL" />
      <input type="submit" value="Add Hero" />
    </form>
  )
}
  
export default AddHero
  