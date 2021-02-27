## 사이트 디렉토리 동기화

```shell
# 현재 디렉토리의 파일들을 원격 webSite 디렉토리와 동기화
# a : 권한, 생성날짜 등 자세한 것도 동기화
# v : 파일 전송 상황 자세히 보기
# z : 압축하여 전송
$rsync -avzP -e 'ssh -p[PORT]' [SOURCE] user@host:[PATH]
```

## Shell script 사용법

```shell
$commit.sh v0.0.1 Add shellfile

```

## sudo npm 명령을 찾을수 없습니다. 트러블 슈팅

```shell
# /usr/bin/[]  파일이 있어야 sudo 명령이 사용 가능하다
# 나는 npm과 node를 전부 삭제해서 이게 없어서 sudo 명령어가 안됬다
# nvm으로 node와 npm 을 설치하면 이게 자동 설정이 안된다 그래서 수동 설정을 해줘야된다
whereis node # /home/daseul/.nvm/versions/node/v14.15.5/bin/node
whereis npm # /home/daseul/.nvm/versions/node/v14.15.5/bin/npm

sudo ln -s /home/daseul/.nvm/versions/node/v14.15.5/bin/node /usr/bin/node
sudo ln -s /home/daseul/.nvm/versions/node/v14.15.5/bin/npm /usr/bin/npm
```

## ssh 설정 시 권한 설정

```shell
sudo chown root:root /home
sudo chmod 755 /home
sudo chown daseul22:daseul22 /home/daseul22 -R
sudo chmod 700 /home/daseul22 /home/daseul22/.ssh
sudo chmod 600 /home/daseul22/.ssh/authorized_keys
```
