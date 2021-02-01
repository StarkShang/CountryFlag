# CountryFlag

## 安装

```shell
npm install @attonex/country-flag
```

## 使用

1. 引入CountryFlag插件

    ```typescript
    // main.ts
    import CountryFlag from "@attonex/country-flag";
    Vue.use(CountryFlag);
    ```

2. 在vue的模板中使用

    ```vue
    <country-flag country="cn"></country-flag>
    ```

## 配置

CountryFlag组件属性

- country: 设置显示国旗的国家，遵循规范ISO 3166-1 alpha-2 code；
- type: 设置国旗类型，可选范围："circle"；
- width: 设置svg图像的宽度；
- height: 设置svg图像的高度；
