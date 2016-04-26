node-exec-demo
==============

演示如何通过web参数在服务端执行命令


# ⚠️警告⚠️ 不要在重要的机器上运行这个DEMO，本人对可能造成的一切直接或间接损失概不负责🙈

## 运行DEMO
```bash
$ node server.js
```

## 测试效果
```bash

$ curl localhost:9080/exec?cmd=echo%20'hello%20bash'

# 调用脚本
$ curl localhost:9080/exec?cmd=sh%20./scripts/newFile.sh%20test.text

```

