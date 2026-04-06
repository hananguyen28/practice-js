# 5. Short circuiring
# 5.1. OR
- || : return the first truthy, if don't have any truthy, return the last
# 5.2. AND
-  && : return the first falsy, if don't have any falsy, return the last
# 5.3. Falsy value in js
Ref: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
- null
- undefined
- false
- NaN
- 0
- -0
- 0n
- "", ''. ``
- document.all

**Common "Truthy" Traps**:
- []: empty array -> truthy
- {}: empty object -> truthy
- "0": string contain zero -> truthy
- "false": string contain false -> truthy 
- [] == false: truthy

## 6. Nullish coalescing operator
```
leftExpr ?? rightExpr
```
- Only return rightExpr when leftExpr is null or undefined