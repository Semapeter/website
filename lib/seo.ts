export const seo = {
  title: '胡萝卜须儿 | 鬼畜区气人UP主',
  description:
    '我叫 胡萝卜须儿，一名鬼畜UP主。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://luoboy.com'
      : 'http://localhost:3000'
  ),
} as const
