declare module "bundle-text:*" {
  const content: string;
  export = content;
}

declare module "*.json" {
  const content: any;
  export = content;
}

declare module "*.scss" {
  const content: { [k: string]: string };
  export = content;
}
