declare module "bundle-text:*" {
  const content: string;
  export = content;
}

declare module "*.json" {
  const content: any;
  export = content;
}
