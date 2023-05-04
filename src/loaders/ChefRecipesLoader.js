export const chefRecipeLoader = async ({ params }) => {
  try {
    const promise1 = (
      await fetch(
        `https://tasty-recipes-server-margubtech-gmailcom.vercel.app/chef/${params.id}/details`
      )
    ).json();
    const promise2 = (
      await fetch(
        `https://tasty-recipes-server-margubtech-gmailcom.vercel.app/chef/${params.id}/recipes`
      )
      ).json();
      return Promise.all([promise1, promise2]);
  } catch (e) {
    console.log(e.message);
  }

};
