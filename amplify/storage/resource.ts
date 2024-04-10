import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "myProjectFiles",
  access: (allow) => ({
    "some/path/*": [
      // access rules that apply to all files within "some/path/*" go here
    ],
    "another/path/*": [
      // access rules that apply to all files within "another/path/*" go here
    ],
  }),
});
