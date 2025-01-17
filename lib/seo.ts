export const seo = {
  title: '胡萝卜须儿 | 哔哩哔哩鬼畜区气人UP主',
  description:
    '我是 胡萝卜须儿，一名哔哩哔哩鬼畜区气人UP主。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://luoboy.com/'
      : 'http://localhost:3000'
  ),
} as const
