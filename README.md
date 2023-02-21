# AI Color Palettes
Input vibes, output color palettes.

This is a thin client on top of OpenAI's API tuned for generating color palettes.

Built on 2/20/23 as a way to become more familiar with the scope and options of the OpenAI API, as well as to de-rust my Svelte skills.

## Potential roadmap items
- the app doesn't have a particularly excellent UI design, it's largely adapted from the Vite + Svelte starter styling with some tweaks for mobile usability
- the app is architected to be adaptable to arbitrary query formats / data contracts; one day I may get a hair up to convert it into a generalizable prompt string concatenator and API exerciser.
- currently the localStorage usage only extends to the prompt/response data, this could be better if the edited prompt context / examples were also cached to prevent losing your work between loads

## Learnings / Notes
- `text-davinci-003` is the only model right now that can reliably choose hex codes that match the descriptive labels. `text-curie-001` is able to generate the correct JSON format and choose color names that make sense, but the hex codes are usually unrelated to the names.
- the big barrier to making this more generic is the specialized component displaying the color palette - the user would have to write a component for their chosen data format, which is a little more involved than the fully end-user tool I started out envisioning (i.e. no coding, just editing the prompt context and examples).
- I used Stable Diffusion and the [App Icon Generator Dreambooth model](https://publicprompts.art/app-icons-generator-v1-dreambooth-model/) to generate the basis for the favicon, which I cleaned up only minimally in [Photopea](https://www.photopea.com/).

## Running it yourself
You'll need an OpenAI key to use this client. See the [API dashboard](https://platform.openai.com/account/api-keys) for details.

1. Clone down the repo
2. `npm install`
3. `touch .env && echo VITE_OPENAI_KEY=your_openai_key > .env`