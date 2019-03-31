## reactROSApp

### 注意
もともとこのアプリはReact Nativeの勉強のために作っていたアプリをデモ用に切り替えたものです。
そのため不必要な部分が混ざっていたり(importのあたりとか)、挙動が不安定な部分があります。

現在わかっている改善が必要な点
* アプリが起動したあとしばらくするとサービスコールを受けなくなる。
* 一度サービスコールを受けてアプリが切り替わる(このアプリの状態がBackgroundに遷移する)と、サービスが停止される。


### 環境構築
* ROSと`rosbridge_server`をインストールしたPC
* React Nativeの開発環境
React Nativeの環境構築についてはウェブ上に記事がたくさんあると思うのでそちらを見てください。
自分がインストールしていたのは以下のバージョンでした。
```
    react-native-cli: 2.0.1
    react-native: 0.55.4
```
### 説明
roslibjsを使ってrosbridgeを介してROSと接続し、

    const ros = new roslib.Ros({
      url: 'ws://192.168.4.93:9090' 
    });
    
ROSのサービスコールを受けると引数に指定されたskype IDへビデオ通話を発信します。

    const skype_server = new roslib.Service({
      ros: ros,
      name: 'skype_server',
      serviceType: "tms_rc_double/skype_srv",
    });
    skype_server.advertise((req,res) => {
      try{
          let url = 'skype:' + req.id + '?call&amp;video=true';
          alert(url);
          Linking.openURL(url);
          res.success = 1;
      }catch(e){
          alert(e);
          res.success = 0;
      }
    });

Skypeをインストール済みの端末ではurlを利用して通話の発信ができるため、今回は引数からurlを生成し、音声通話とビデオ通話をtrueにしてリンクへアクセスしています(詳しい説明は公式のチュートリアル等を見てください)。

機能を必要最小限にしたため、背景を黒にして何も表示させていません。(サービスコールを受けるとアラートは出ます)

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        //alignItems: 'center',
    },
    });

roslibjsの使い方がわからない場合は
以前自分が書いた[こちら](https://qiita.com/kouhei-k/items/bb44c070d4304caa4bf1)の記事、もしくは[ROS Wiki](http://wiki.ros.org/roslibjs)を見てください(Wikiはサービス周りの説明が少し少ないです)。

React Nativeを使って開発しているのでAndroid, iOSのどちらも対応可能ですが、Androidでしか動作は確認していません。

### 手順
1. PC上で`roslaunch rosbridge_server rosbridge_websocket`を実行
2. このアプリを起動
3. サービスコールを発行
4. アプリにアラートが表示されるとともにSkypeに画面が切り替わり、通話が発信される
5. 相手の端末で受信、この際応答しただけでは音声通話のみなので相手の端末側でビデオ通話をオンにする。




