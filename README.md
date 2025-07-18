# Gabby Multi Device User Bot
<!-- Glowing Header -->
<p align="center">
  <img src="https://files.catbox.moe/i5vhxx.jpeg" height="40" width="100%">
</p>
A simple WhatsApp Bot that supports all devices, 
proudly created by Gabby.

## Setup


### Deploy on VPS or PC or any linus server (Example for Ubuntu)

 #### Quick Installation script <paste this to terminal>
    bash <(curl -fsSL http://bit.ly/44UHzmG)
 #### ✦G✦ Manual Installation ✦G✦

##### install the following#####
         
1. ## ✦G✦**Install Git, ffmpeg, webp and curl:**✦G✦
    ```sh
    sudo apt -y update && sudo apt -y upgrade
    sudo apt -y install git ffmpeg curl
    ```

2. ######  ✦G✦** Node.js:**✦G✦
    ```sh
    curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
    sudo -E bash nodesource_setup.sh
    sudo apt-get install -y nodejs
    ```

3. ##### ✦G✦ ** Yarn:**✦G✦
    ```sh
    sudo npm install -g yarn
    ```

4. ##### ✦G✦ **pm2:**✦G✦
    ```sh
    sudo yarn global add pm2
    ```

5. ##### ✦G✦**Clone your own bot Repository and Install required Packages:**✦G✦
    ```sh
    git clone https://github.com/lyfe00011/levanter botName
    cd botName
    yarn install
    ```

6. ###### ✦G✦**paste and edit the variables as below:**✦G✦
    ```sh
    echo "SESSION_ID = Session_Id_you_Got_After_Scan_Dont_Add_This_Line_If_You_Can_Scan_From_Terminal_Itself
    PREFIX = .
    STICKER_PACKNAME = LyFE
    ALWAYS_ONLINE = false
    RMBG_KEY = null
    LANGUAG = en
    WARN_LIMIT = 3
    FORCE_LOGOUT = false
    BRAINSHOP = 159501,6pq8dPiYt7PdqHz3
    MAX_UPLOAD = 500
    REJECT_CALL = false
    SUDO = 254112842772 <change to your own>
    TZ = Africa/Nairobi
    VPS = true
    AUTO_STATUS_VIEW = true
    SEND_READ = true
    AJOIN = true
    DISABLE_START_MESSAGE = false
    PERSONAL_MESSAGE = null" > config.env
    ```

7. ##### ✦G✦**Edit `config.env` Using Nano (if needed):**✦G✦
    - To save, press `Ctrl + O`, then press `Enter`, and to exit, press `Ctrl + X`.

8. ##### ✦G✦**Start and Stop the Bot:**✦G✦
    - To start the bot:
      ```sh
      pm2 start . --name botName --attach --time
      ```
    - To stop the bot:
      ```sh
      pm2 stop botName
      ```

### ✦G✦Deploy on Replit✦G✦

[![Run on Replit](https://replit.com/badge/github/your-repo-owner/your-repo-name)](https://replit.com/@Nightbot2O/whatsapp-bot-md)

1. Fork the repository.
2. Edit `config.env`.
3. Click run.

### ✦G✦ Thanks To ✦G✦

- [Yusuf Usta](https://github.com/Quiec) for [WhatsAsena](https://github.com/yusufusta/WhatsAsena)
- [@adiwajshing](https://github.com/adiwajshing) for [Baileys](https://github.com/adiwajshing/Baileys)
