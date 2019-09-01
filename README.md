# reactjs-infinite-scroll
Unsplash Infinite Scroll with ReactJS

```const unsplash = new Unsplash({
    applicationId: config.get("APPLICATION_ID"),
    secret: config.get("SECRET"),
    callbackUrl: config.get("CALLBACK_URL")
});
```

`applicationId: config.get("APPLICATION_ID"),` 
Does not set the applicationId right, not sure why, but adding in the access key directly works.