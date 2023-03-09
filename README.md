# WeeTunes

Simple project built using React, Next.js, TypeScript, SASS and [Ant Design](https://ant.design/) leveraging [Apple music API](https://itunes.apple.com/us/rss/topalbums/limit=100/json) for top 100 albums

## Setup

Project is using node version `v16.19.1`

To run project locally

```bash
npm install
```

```bash
npm run dev
```

Project is also hosted using Netlify at: https://bert-weetunes.netlify.app/

## Notes

I decided to choose antd because of my experience with it in the past and because it allows for rapid development. One huge downside is that it does not have great accessibility support and users who need to use keyboard navigation would not be able to fully use my app. If I had time to redo this with accessibility in mind, I would probably built it from scratch, or use something more popular like Bootstrap or TailwindCSS.
