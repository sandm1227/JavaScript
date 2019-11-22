# git使用与命令总结
## git安装后与github关联
> 1. 需要现在github上建立项目
> 2. 本地配置ssh：ssh-keygen -t rsa -C "xxxxx@qq.com"
> 3. 需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，可以在用户主目录里找到.ssh目录，里面有id_rsa和id_rsa.pub两个文件，这两个就是SSH Key的秘钥对，id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人
> 4. 进入ssh目录：cd ~/.ssh
> 5. 查看文件： cat id_rsa.pub
> 6. 将 id_rsa.pub 中的内容添加到github账号的设置的ssh配置那里
> 4. 测试命令：ssh -T git@github.com
> 5. 在github的setting中配置: SSH and GPG keys,将id_rsa.pub拷贝到key位置


## 个人远程仓库
> 1. **设置用户名** git config --global user.name "你的用户名"
> 2. **设置邮箱**  git config --global user.email "你的邮箱"
> 3. **生成ssh key**  ssh-keygen -t rsa -C "你的邮箱"
> 4. **添加远程仓库**  git remote add origin "你复制的地址"
> 5. **上传并指定默认源** git push -u origin master  // 指定origin为默认主机，以后push默认上传到origin上
> 6. **提交到远程仓库** git push    // 将当前分支增加的commit提交到远程仓库
> 7. **从远程仓库同步**  git pull    // 在本地版本低于远程仓库版本的时候，获取远程仓库的commit


## git相关操作命令
#### 参考网址： https://www.cnblogs.com/qweeewy/p/10110163.html
> 1. **git init**     在本地的当前目录里初始化git仓库
> 2. **git clone origin**     从origin位置克隆代码到本地
> 3. **git status**      查看当前仓库的状态。碰到问题不知道怎么办的时候，可以通过看它给出的提示来解决问题
> 4. **git diff**      查看当前状态和最新的commit之间的不同的地方
> 5. **git diff 版本号1 版本号2**       查看两个指定的版本之间不同的地方。这里的版本号指的是commit的hash值
> 6. **git add -a**      在commit之前先add
> 7. **git checkout --.**      这里用小数点表示撤回所有修改，在--前后都有空格
> 8. **git commit -m "提交信息"**
> 9. **git clean -xf**     删除当前目录下所有没有track过的文件。不管它是否是.gitignore文件里面指定的文件夹和文件
> 10. **git log**        查看当前版本及之前的commit记录  
> 11. **git reflog**      HEAD的变更记录
> 12. **git reset --hard 版本号**     回退到指定版本号的版本，该版本之后的修改都被删除。同时也是通过这个命令回到最新版本。需要reflog配合
> 13. **git remote -v**    查看远程资源
> 14. **git remote set-url origin xxxxxx**    添加远程资源到记录中
