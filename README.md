# NOTE: Supported by ROSIN - ROS Industrial Quality-assured Robot Software Components. More information: https://www.rosin-project.eu/ This work has received funding from the European Union‘s Horizon 2020 research and innovation programme under grant agreement No 732287. 

# Cellule2021
 
 Mise à jour de la cellule 2020 avec coppeliasim 4.1 ainsi que la réorganisation des répertoires
 Pour lancer la simulation vous devez mettre ses informations dans votre terminal :
 En résumé (pour copier/coller dans un terminal):

          git clone https://github.com/aip-primeca-occitanie/cellule2021
          cd etu
          cp exemple/Tuto_Basique.main_commande.cpp .
          ./script1_CompileandRun.sh Tuto_Basique data2_1_1_n0
          
ps : il peut être necessaire d'ajouter les appli suivantes :
    Installer la librairie modbus xterm et quelques bibliothèques graphique pour coppelliasim avec

     sudo apt-get install libmodbus-dev xterm libavcodec-dev libavformat-dev libswscale-dev

