export const CLI_COMMANDS = [
  'git show HEAD~1',
  "git commit -m 'Refactoring in progress'",
  'git clean',
  'kubectl logs -f -l app.kubernetes.io/name=batch | tee batch.log',
  'sudo pacman -Qi borg',
  'notes search ProxyPass',
  'pass -c pro/believeit/production-04/admin',
  'git rebase -i 5ad68603',
  'git branch -D feature/better-dashboard',
  'ava-cli end-to-end-tests staging',
  'ava-cli deploy staging 5c9e9d5e',
  'git lg',
  'z projects',
  'sudo umount /dev/sdc1',
  'sudo dd if=manjaro-xfce-20.2-201203-linux59.iso of=/dev/sdc1 bs=4096 && sync',
  'git checkout -b doc/deployment',
  'git push --set-upstream origin doc/deployment',
  'mkdir infrastructure',
  'chmod +x k3s-install.sh',
  'k3s kubectl get all',
  'kubectl get all --all-namespaces',
  'terraform plan',
  'terraform apply',
  'curl -sfL https://get.k3s.io -o k3s-install.sh',
  'helm list',
  'kustomize build . | kubectl apply -f -',
  'helm upgrade -f production-values.yaml prometheus ./prometheus',
  'sudo systemctl status k3s',
  'sudo systemctl status sshd',
  'ss -ltnp',
  'rsync -avz mtp://Google_Pixel_3a_/ backup-pixel-2020-11-20',
  'pass generate -c pro/believeit/production-03/smtp-su',
  'sudo pacman -S ddclient',
  'sudo pacman -S sslh',
  'git clone https://github.com/k3s-io/helm-controller',
  'kubectl create -f applications/nextcloud',
  'kubectl get charts',
  'kubectl get ingressroutes shaarli -o yaml',
  'ranger /etc',
  'kubectl get cm traefik -o yaml',
  'kubectl config set-context --current --namespace=gitea',
  'sudo chown -R remi:remi data',
  'mvn clean',
  'sbt new playframework/play-scala-seed.g8',
  'java -jar target/scala-2.13/play-scala-seed_2.13-1.0-SNAPSHOT.jar',
  'mvn package -Pnative',
  'npx create-react-app frontend --template typescript',
  'yay -S intellij-idea-ultimate-edition',
  'tig show HEAD~2',
  'tig diff master',
  'mvn quarkus:dev',
  'lerna run build',
  'lerna bootstrap',
  'n 14',
  'yarn run test',
  'docker run -ti node:14 bash',
  'npm run coverage',
  'yarn add -D node-sass',
  'rm -rf backend',
  'tsc --init',
  'docker system prune -af',
  'git-crypt unlock ~/git-secrets/pro/believeit/production-01',
  'yarn add mocha chai @types/mocha @types/chai source-map-support',
  'cd infrastructure',
  'npm i -D prettier',
  'git push --set-upstream origin feature/first-home-view',
  'abc-cli clean-build',
  'kubectl delete pod ava-test-rabbitmq',
  'pkill chromium',
  'wget https://docs.mapbox.com/help/data/stations.geojson',
  'ssh-keygen -b 4096 -f ~/.ssh/perso/byoubyou',
  'ssh-copy-id -f -i ~/.ssh/perso/byoubyou/id_rsa root@192.168.1.14',
  'ssh -o pubkeyauthentication=no root@192.168.1.14',
  'git-create-ssh-remote root@192.168.1.14 byoubyou',
  'systemctl status postgres',
  'ssh odroid@192.168.1.14',
  'sudo dmesg',
  'sudo journalctl -fxu sshd',
  'git reset --hard',
  'scp root@192.168.1.1:/home/k3s/.kube/config .',
  'sudo mhwd-kernel -i linux58',
  'ansible -i inventory.cfg bootstrap.yml',
  'sudo sensors-detect',
  'base64 production.key > production.base64.key',
  'tree',
  'git fetch origin feature/deployment',
  'kubectl exec -ti runner-2vsqwsxx-project-15181994-concurrent-0bmgst bash',
  "lspci -k | grep -A 2 -E '(VGA|3D)'",
  'clear',
  'apk update && apk add openssh',
  'sudo apt-get -f install',
  'sudo pacman -Syu',
  'lsusb',
  'lsblk',
  'apt-file list nginx',
  'lshw -enable pci -class display',
  'dig @80.67.169.12 wikipedia.fr',
  'sudo blkid',
  'sudo mount -t vboxsf shared /home/vbox/shared',
  'ip a',
  '7z x h2.zip',
  'type kgaa',
  'nmap 213.186.33.18 -p 1-200',
  'lsb_release -a',
  'sudo -iu smtp-su',
  'tar -tvf archive.tar',
  'xdg-open http://localhost:8080',
  'fdisk /dev/sdc',
  'docker search mariadb',
  'docker',
  'ssh -L 2000:localhost:80 ec2@lila.production',
  'getent group docker',
  'sudo usermod -aG docker',
  'unset CYPRESS_CACHE_FOLDER',
  ':(){ :|:&};:',
  'reset',
  'dpkg-query -L tig',
  'sudo readlink -f /proc/1957/exe',
  'gpg --armor --output secret.gpg --symmetric secrets.txt',
  'iw list | less',
  'fortune | lolcat',
  'setxkbmap fr',
  'sudo ufw status verbose',
  'nyancat',
  'less /var/log/syslog',
  'pip install --upgrade pip',
  'gradle tasks',
  'gradle test',
  'kubectl get events',
  'pip3 freeze > requirements.txt',
  'netplan try',
  'vagrant destroy --force',
  'find secrets -type f -exec shred -fvu {} \\;',
  'docker rmi $(docker images -aq)',
  'docker volume inspect test-rabbitmq',
  'openssl rand -hex 128',
  'vagrant global-status --prune'
    // TODO: check
    // TODO: check
    // TODO: check
    // TODO: check
    // TODO: check


  gco HEAD frontend-commons/babel.config.js
  gss | wc -l
  gcl https://github.com/hanreev/types-ol.git
gc -m "Refactor routes"
helm upgrade abc-map-staging /home/remo/projects/abcmap/abc-map-2
gcb feature/user-profile
gc -m "Start new branch, add user account view"
yay -S hunter
kill 9428
lerna run start:e2e --parallel
curl --head https://staging.abc-map.fr/api/health
    k logs -f pod/kube-scheduler-master0
k logs -f pod/kube-apiserver-master0
k logs -f pod/metrics-server-678f4bf65b-5wnb8
wget https://projectcontour.io/quickstart/contour.yaml
    gc -m "Improve contour deployment"
k logs -f contour-6b5cf4dcb8-xjfpg
k logs -f pod/contour-6b5cf4dcb8-xjfpg
k logs -f pod/kube-controller-manager-master0
ssh root@192.168.1.19
gc -m "Improve known hosts"
ansible-playbook -i inventory.cfg site.yaml -t addons
cd kubeadm-ansible/
cd oauth
npm
gco ft/mobile-delete-notif
gco ft/downloadDesktopAgent
vagrant list
vagrant status
vagrant ssh k8s-m1
ava i
ansible-playbook site.yaml
    ./hack/setup-vms.sh
ssh root@192.168.56.1
vagrant destroy -f
vim ~/.ssh/config
ssh-copy-id root@192.168.56.11
ssh-copy-id root@192.168.56.12
ssh-copy-id root@192.168.56.13
export KUBECONFIG=/home/remo/.kube/config/192.168.54.12/root/.kube/config
ssh-copy-id root@192.168.56.10
k logs -f pod/kube-flannel-ds-mr7sj
ansible-playbook -i inventory.cfg reset-site.yaml
ansible-playbook -i inventory.cfg site.yaml
k logs -f pod/kube-flannel-ds-mhvk4
k logs -f pod/metrics-server-678f4bf65b-fnbcb
k describe pod/metrics-server-678f4bf65b-fnbcb
gc -m "Fix deployments"
k delete pod pod/metrics-server-678f4bf65b-fnbcb
k delete pod/metrics-server-678f4bf65b-fnbcb
k logs -f pod/metrics-server-678f4bf65b-mn2xj
kubectl delete pod pod/metrics-server-678f4bf65b-mn2xj
kubectl delete pod/metrics-server-678f4bf65b-mn2xj
kubectl logs -f pod/metrics-server-678f4bf65b-cxvj2
kubectl describe apiservice v1beta1.metrics.k8s.io
k logs -f pod/kube-apiserver-vm-0
k logs -p -f pod/kube-apiserver-vm-0
ansible-playbook -i inventory.cfg site.yaml -t metrics-server
k logs -f pod/metrics-server-658867cdb7-tqzpp
k describ pod/metrics-server-658867cdb7-tqzpp
k describe pod/metrics-server-658867cdb7-tqzpp
gc -m "Fix metrics server"
gc -m "Remove useless files"
cd vagrant
cd ubuntu-20-single-node
z single
ssh-copy-id root@192.168.56.50
ssh-copy-id -o pubkeyauthentication=no root@192.168.56.50
cgss
gc -m "Add single node setup"
k get node
kubectl taint nodes --all node-role.kubernetes.io/master-\n
k logs -f pod/metrics-server-658867cdb7-pnrwh
k describe pod/metrics-server-658867cdb7-pnrwh
kubectl taint nodes --all node-role.kubernetes.io/control-plane-\n
gc -m "Improve setup"
cd ~/projects
gcl https://github.com/kubernetes-sigs/kubespray
    cd kub
cd kubespray
ga README.md
gc -m "Improve readme"
z care
ansible-playbook -i environments/single-node/inventory.cfg shutdown.yaml
gc -m "Wait for api server"
k-events-sorted
ksn projectcontour
k logs -f pod/contour-6b5cf4dcb8-k7m5l
k logs -p -f pod/contour-6b5cf4dcb8-k7m5l
ping 192.168.56.50
vagrant ssh
gc -m "Add firewall"
nmap 192.168.56.50
ssh -o pubkeyauthentication=no root@192.168.56.50
vagrant destroy -f && vagrant up
ssh root@192.168.56.50
vim
ssh-copy-id -f -o pubkeyauthentication=no root@192.168.56.50
export KUBECONFIG=/home/remo/projects/self-hosted-k8s/.kube/config/192.168.56.50/root/.kube/config
gc -m "Improve firewall, wip"
gl*
cd vagrant/ubuntu-20-single-node
ssh-copy-id -f -o pubkeyauthentication=no root@192.168.56.10
ssh-copy-id -f -o pubkeyauthentication=no root@192.168.56.13
ssh-copy-id -f -o pubkeyauthentication=no root@192.168.56.12
cd ../..*
ansible-playbook -i environments/single-node/inventory.cfg bootstrap.yaml -t firewall
gc -m "Improve config"
cp ~/.ssh/id_rsa.pub .
    cp ~/.ssh/id_rsa.pub ../ubuntu-20-single-node
vagrant destroy
gc -m "Improve vms"
ssh -v root@192.168.56.51
ssh -v root@192.168.56.52
ping root@192.168.56.11
ping 192.168.56.12
curl 192.168.56.12:6443
curl -v 192.168.56.10:6443
curl 192.168.56.10:6443
curl 192.168.56.11:10248
curl -v 192.168.56.11:10248
ansible-playbook -i environments/multi-nodes/inventory.cfg shutdown.yaml
z care prod
markdown-toc README.md
chmod +x ci.sh
ansible-config init --disabled > ansible.cfg
cd example-app
wget https://projectcontour.io/examples/httpbin.yaml\n
    cd ../roles/k8s-contour/templates
wget https://github.com/jetstack/cert-manager/releases/download/v1.5.4/cert-manager.yaml
    dig www.abc-map.fr
kubectl logs -p pod/kube-apiserver-multi-node-vm-0 -n kube-system > log.txt
k get pods -n kube-system
k describe pod kube-flannel-ds-n4c5r
k describe pod kube-flannel-ds-n4c5r -n kube-system
k logs kube-flannel-ds-n4c5r -n kube-system
k logs kube-flannel-ds-n4c5r -n kube-system kube-flannel
k logs -p pod/kube-apiserver-multi-node-vm-0 > log2.txt
k logs -p pod/kube-apiserver-multi-node-vm-0 -n kube-system > log2.txt
    ./bootstrap.yaml
gc -m "Add cert manager, wip"
ansible-playbook -i environments/multi-nodes/inventory.cfg bootstrap.yaml -t contour
gc -m "Improve issuers"
ex
k logs -p pod/coredns-6d4b75cb6d-2fqpr
k logs -p pod/coredns-6d4b75cb6d-2fqpr -n kube-system
kubectl get nodes -oyaml |
kubectl get nodes -oyaml
kubectl logs -f pod/kube-flannel-ds-j422m
kubectl get nodes -o jsonpath='{.items[*].spec.podCIDR}'\n
wget https://raw.githubusercontent.com/flannel-io/flannel/v0.17.0/Documentation/kube-flannel.yml
    kubectl logs -f pod/kube-flannel-ds-7tcct
kubectl logs -f pod/kube-flannel-ds-7tcct -n kube-system
k logs -f pod/etcd-multi-node-vm-0
gc -m "Add kubernetes version"
k logs -f pod/kube-controller-manager-multi-node-vm-0
k logs -p pod/kube-controller-manager-multi-node-vm-0
k logs -f pod/kube-apiserver-multi-node-vm-0
k logs -p pod/kube-apiserver-multi-node-vm-0 > log.txt
/home/remo/projects/self-hosted-k8s/roles/k8s-flannel/templates
wget https://raw.githubusercontent.com/flannel-io/flannel/v0.18.1/Documentation/kube-flannel.yml
    gc -m "Restore flannel version"
cd ../kubespray
gcl https://github.com/kairen/kubeadm-ansible
    cd kubeadm-ansible
ksn kube-system
k logs -f pod/kube-flannel-ds-djxcn
k logs -f pod/kube-flannel-ds-djxcn kube-flannel
k logs -p pod/kube-scheduler-multi-node-vm-0
k logs -f pod/kube-scheduler-multi-node-vm-0
gc -m "Fix flannel configuration"
k delete -f example-app/httpbin.yaml
gc -m "Working sample"
cat ~/.kube/perso/roule-boule-ma-poule/k8s-tunnel.sh
z abc prib
cd notes
id
k logs -p pod/kube-apiserver-multi-node-vm-0
k logs -p pod/kube-apiserver-multi-node-vm-0 -n kube-system
sudo pacman -S traceroute
traceroute 192.168.56.11
z self
vagrant destroy all
ssh-copy-id -f -o pubkeyauthentication=no root@192.168.56.11
ping 192.168.56.11
scp -R 192.168.50.10:/etc/ufw etc.ufw
scp -R root@192.168.50.10:/etc/ufw etc.ufw
scp -R root@192.168.56.10:/etc/ufw etc.ufw
scp -r root@192.168.56.10:/etc/ufw etc.ufw
rm -rf etc.ufw
ansible -v
ansible --version
pacman -Qi ansible
ansible-playbook -i environments/multi-nodes/inventory.cfg reboot.yaml
curl 192.168.56.80
curl -v 192.168.56.10:80
k apply -f example-app/httpbin.yaml
curl -v 192.168.56.11:80
curl -v 192.168.56.11:81
curl --connection-timeout 3 192.168.56.11:81
curl --timeout 3 192.168.56.11:81
curl -m 3 192.168.56.11:81
curl -m 3 192.168.56.11:10250
ansible-playbook -i environments/multi-nodes/inventory.cfg disable-firewall.yaml
nc -zvw10 192.168.56.11 22
nc -zvw10 192.168.56.11 10250
nc -zvw3 192.168.56.11 10250
ansible-playbook -i environments/multi-nodes/inventory.cfg bootstrap.yaml -t firewall,check
nc -zvw3 192.168.56.10 6443
ansible-playbook -i environments/multi-nodes/inventory.cfg bootstrap.yaml -t firewall-check
nc -zvw3 192.168.56.12 10250
curl https://abc-map.fr:10250
    curl https://abc-map.fr:80
    curl http://abc-map.fr:80
    gc -m "Add firewall check"
pacman -S nc
sudo pacman -S nc
sudo pacman -S netcat
nc
nc --version
cd ~/.m
dig abc-map.fr
gc -m "Improve firewall"
cd vagrant/ubuntu-20-multi-nodes
    ./ci.sh
mv example-app vagrant disable-firewall.yaml reboot.yaml development
ansible-playbook -i environments/multi-nodes/inventory.cfg bootstrap.yaml -t keepalived
ssh -L 6443:localhost:6443 $MASTER_IP
ssh -L 6443:localhost:6443 192.168.56.10
ssh -L 6443:localhost:6443 root@192.168.56.10
export KUBECONFIG=/home/remo/.kube/config/192.168.56.10/root/.kube/config
k apply -f development/example-app/sample-app.yml
k apply -f development/example-app/ingress-http.yml
gc -m "Working keepalived config"
gc -m "Add tcp health check"
cd ../ubuntu-20-single-node
ssh -v root@192.168.56.50
ansible-playbook -i environments/single-node/inventory.cfg bootstrap.yaml
pacman -Qm
yay -R libmagick6
sudo pacman -S imagemagick
yay -Qe
ping 192.168.56.13
/home/remo/projects/self-hosted-k8s/roles/k8s-openebs/files
wget https://openebs.github.io/charts/openebs-operator.yaml
    gc -m "Add openebs"
z
cd self-hosted-k8s
gc -m "Add vm"
ssh -v root@192.168.56.12
ssh -v root@192.168.56.13
ssh -v root@192.168.56.14
ssh -v root@192.168.56.11
gcloud compute image list
gcloud compute images list
chmod +x ./development/gcloud-create.js
gcloud config set project kubernetes-playground-351808
gcloud compute instances list
gcloud compute instances delete vm-0 -f
gcloud compute instances delete vm-0 --force
gcloud compute instances delete --help
    ./development/gcloud-create.js
    ./development/gcloud.js
    ./development/gcloud.js delete
./development/gcloud.js create
gcloud compute list
gcloud compute instances
ssh -v root@192.168.56.10
cd environments
cp -R multi-nodes production
gcloud compute instances list\n
ssh-copy-id root@34.163.55.69
ssh-copy-id root@34.155.56.34
ssh-copy-id root@34.155.44.28
gc -m "Improve scripts"
kubeadm token generate
ssh-copy-id root@34.155.51.36
ansible-playbook -i environments/instance-gcloud/inventory.cfg
ansible-playbook -i environments/instance-gcloud/inventory.cfg destroy.yaml
bash -c '\n\n\n\necho Hello\n\n\n'
ssh root@34.155.51.65
ssh root@34.163.54.69
ssh root@34.155.68.238
ansible-playbook -i environments/instance-gcloud/inventory.cfg bootstrap.yaml
ansible-playbook -i environments/google-cloud-platform/inventory.cfg destroy.yaml
rsync -avz . root@34.66.51.33:/root/project
vagrant global-status --global
cd cd ../../
ansible-playbook -i environments/google-cloud-platform/inventory.cfg bootstrap.yaml
ssh root@192.168.56.10*
ssh root@34.52.5.33
cd development/vagrant/ubuntu-20-single-node
cd ../ubuntu-20-multi-nodes
vim ~/.ssh/known_hosts
ssh root@192.168.56.14
ga -
z m
gc -m
gc
vagrant down -f
ssh root@192.168.56.12
ssh root@192.168.56.13
vagrant up
wget https://github.com/containerd/containerd/releases/download/v1.6.6/containerd-1.6.6-linux-amd64.tar.gz
    mkdir test
cd test
z x ../containerd-1.6.6-linux-amd64.tar.gz
z x containerd-1.6.6-linux-amd64.tar
rm -rf test
vagrant down
ping 192.168.56.10
ssh root@192.168.56.11
vagrant halt -f
gc -m "Move notes"
b
gco refacto/remove-voice-detection
gp -f
ava build backend
ava lint frontend-receptionpoint
ava build frontend-admin
gc -m "Fix tests, restore advice"
gc -m "Improve activity watcher"
gco ft/delete-notifications
loop 20 "yarn run test"
k logs -l -f  app.kubernetes.io/name=backend
    ./node_modules/.bin/jest  --detectOpenHandles
gd master
gc -m "Fix test"
ss -ltnp
gc -m "Refactor notification screen"
yarn run watch
chmod +x build.sh
gc -m "Prettier"
chmod +x /home/remo/me/personnel/liens/transform.js
/home/remo/me/personnel/liens/transform.js
z front adm
ava deploy staging 2022-06.29.1
eas build -p android --profile staging --non-interactive --wait
z ava mob
source ~/bin/android-env.sh
yarn run android
yarn run test:interactive
gc -m "Improve display, fix notif status issue"
cd ~/Téléchargements
xdg-open .
    cd ~/Documents
mv /home/remo/Téléchargements/Comment\ débloquer\ votre\ prêt\ 2.pdf /home/remo/Téléchargements/Demande\ de\ versement\ des\ fonds.pdf /home/remo/Téléchargements/devoir\ d\'explication\ loi\ immo.pdf /home/remo/Téléchargements/devoir_d_explication_loi_immo.pdf /home/remo/Téléchargements/Fiche\ information\ standardisée\ européenne.pdf /home/remo/Téléchargements/impptu_1.pdf /home/remo/Téléchargements/map\ \(1\).pdf /home/remo/Téléchargements/map\ \(2\).pdf /home/remo/Téléchargements/map.pdf /home/remo/Téléchargements/Notice\ assurance.pdf /home/remo/Téléchargements/Offre_de_pret_immobilier.pdf /home/remo/Téléchargements/Offre\ de\ prêt\ immobilier.pdf /home/remo/Téléchargements/Service\ signature\ électronique.pdf /home/remo/Téléchargements/Tableau\ d_amortissement.pdf .
gc -m "Update"
ggl
ava watch frontend-reception-point
ava watch frontend-receptionpoint
gc -m "Improve bot structure"
cd ../desktop-agent
cd frontend-receptionpoint/public/avatars/
mv /home/remo/Téléchargements/render_test_joe3_4test.webm /home/remo/Téléchargements/render_test_LILA3_4test.webm .
    xdg-open render_test_joe3_4test.webm
xdg-open render_test_LILA3_4test.webm
ava b all
cd packages/frontend-receptionpoint
ava watch
ava watch all
ava test
gd src/data-processing/artefact-generator/ArtefactGenerator.test.tsx
cd packages/
ava lint
ava lint all
ga frontend-receptionpoint/
ga backend-shared/
ga backend/
ga .
    git reset backend/src/bot/skills
gc -m "Remove device id, from voice detection"
ava w all
gc -m "Improve tests"
git submodule update
ava i && ava b
gf origin feature/improve-deliveries
ava watch backend
cd packages/backend
gc -m "Improve test"
yarn run test
gc -m "Improve helper"
gc -m "MR"
cd ../frontend-admin
gco fix/organization-contacts-harmonisation
gco feature/better-responsive-landing-view
git rebase --abort
git rebase -i 85ec6fd51
git rebase --continue
gb -D feature/improve-deliveries
gco feature/improve-deliveries
git rebase master
gco --track origin/doc/demo
git branch -v
gf origin doc/demo
gco origin/doc/demo
gco doc/demo
gcb doc/demo/2022-07-04
gb -m doc/demo/2022-07-05
gc -m "Import doc from yuan branch"
git remote prune origin
gcb fix/rpoint-config-screen
ava s
cd packages/frontend-admin
gc -m "Fix button overflow"
gco doc/demo/2022-07-05
cd documentation/demos
gc -m "Improve doc, prettier"

cd development/vagrant
cd ubuntu-20-multi-nodes
vagrant global-status --prune
gc -m "Improve playbook"
ansible-playbook -i environments/multi-nodes/inventory.cfg bootstrap.yaml
prettier --write .
    gc -m "Format, improve cii"
ansible-playbook -i environments/multi-nodes/inventory.cfg -t firewall
ansible-playbook -i environments/multi-nodes/inventory.cfg bootstrap.yaml -t firewalll
ansible-playbook -i environments/multi-nodes/inventory.cfg bootstrap.yaml -t firewall
ansible-playbook -i environments/multi-nodes/inventory.cfg destroy.yaml
scp -r root@192.168.56.10:/etc/containerd/config.toml .
    gc -m "Working firewall, better ansible config"
    ./development/gcloud/gcloud.js createasa
    ./development/build.sh
gc -m "Final"
rm -rf .git
git init
gc -m "First commit"
wget https://www.gnu.org/licenses/gpl-3.0.txt
    mv gpl-3.0.txt LICENSE.txt
gc -m "Add license"
git remote add origin git@github.com:remipassmoilesel/self-hosted-k8s.git
    ./development/gcloud/gcloud.js create
    ./development/gcloud/gcloud.js prepare
gcloud compute ssh --zone europe-west9-a vm-0
gcloud compute scp --zone europe-west9-a . vm-0:/home/remo/k8s
gcloud compute scp -r --zone europe-west9-a . vm-0:/home/remo/k8s
gcloud compute scp -R --zone europe-west9-a . vm-0:/home/remo/k8s
gc -m "Add experiment"
gcloud compute scp --recurse --zone europe-west9-a . vm-0:/home/remo/k8s
git remote add gitlab git@gitlab.com:remipassmoilesel/self-hosted-k8s.git
gp gitlab master
chmod +x ~/Téléchargements/lila_2022-07-05T08_31_41.879Z_5c181f28c733a28a677c.AppImage


z k8s
~/Téléchargements/lila_2022-07-05T08_31_41.879Z_5c181f28c733a28a677c.AppImage
dmesg
sudo dmesg
containerd


vagrant halt
ip route
ip route all
ip route -6
ip route help
ip route list all
sudo -i
gco HEAD roles/containerd/templates/config.toml
gc -m "Disable IPv6 on local setup"
cd ../../..
    git diff HEAD~1
    ./development/gcloud/gcloud.js delete
    git push origin gitlab
git push gitlab master
git l
cd development/vagrant/ubuntu-20-multi-nodes
vagrant destroy -f
z self
git push gitlab master -f
~/me
yay -S bun



z ol
cd ~/projects/abcmap/openlayers
git pull origin main
k get all --all-namespaces
ksn abc-map-production
k logs -l app.kubernetes.io/name=backend
gc -m "Improvedoc"
z self hosted


cd data
    ./port-forward.sh
    ./dump
    ./dump.sh
gc -m "Backup"
popd
cd development/example-app
wget https://raw.githubusercontent.com/reactive-tech/kubegres/v1.15/kubegres.yaml\n
    cd ../../development/vagrant/ubuntu-20-multi-nodes
vagrant up
cd ../..
du -h
docker system prune -av
docker system prune -a
ncdu ~/VirtualBox\ VMs/vm-0
ncdu ~/VirtualBox\ VMs
df -h
gcb feature/postgres-example
gc -m "Rename examples"
    ./development/format.sh
ansible-playbook -i environments/multi-nodes/inventory.cfg bootstrap.yaml
ssh root@192.168.56.10
rsync -avz root@192.168.50.10:/root/k8s .
    rsync -avz . root@192.168.50.10:/root/k8s
rsync -avz . root@192.168.56*.10:/root/k8s
rsync -avz . root@192.168.56.10:/root/k8s
git push --set-upstream origin feature/postgres-example\n
k logs -f --tail 1000 -l app.kubernetes.io/name=abc-map-server
k logs -f --tail 10000 -l app.kubernetes.io/name=abc-map-server > log.txt
z multi
vagrant halt


~
    node personnel/liens/liens.md
node personnel/liens/transform.js > liens-2.md
node personnel/liens/transform.js > personnel/liens/liens-2.md
node personnel/liens/transform.js | tee personnel/liens/liens-2.md
node personnel/liens/transform.js | tee personnel/liens/liens-2.md | head
node personnel/liens/transform.js | tee personnel/liens/liens-2.md | head -n 200
gc -m "Improve notes, add transform"
git reset --soft HEAD~1
gco HEAD /home/remo/me/personnel/liens/liens.md
node personnel/liens/transform.js
node personnel/liens/transform.js | tee personnel/liens/liens-2.md
gc -m "Second link transformation"
z notes
cd .
    k logs --tail 10000 -l app.kubernetes.io/name=abc-map-server > log.txt
k logs --tail 1000 -l app.kubernetes.io/name=abc-map-server > log.txt
cat log.txt | jq .userAgent
cat log.txt | jq
cat log.txt | jq .userAgent .date
cat log.txt | jq ".userAgent .date"
cat log.txt | jq ".userAgent.date"
cat log.txt | jq ".userAgent,.date"
k logs --tail 1000 -l app.kubernetes.io/name=abc-map-server | jq ".userAgent,.date
k logs --tail 1000 -l app.kubernetes.io/name=abc-map-server | jq ".userAgent,.date"
k logs --tail 5000 -l app.kubernetes.io/name=abc-map-server | jq ".userAgent,.date"
k logs --tail 3000 -l app.kubernetes.io/name=abc-map-server | jq ".userAgent,.date"
k logs --tail 2000 -l app.kubernetes.io/name=abc-map-server | jq ".userAgent,.date"
k logs --tail 2000 -l app.kubernetes.io/name=abc-map-server | jq ".userAgent" [ uniq
k logs --tail 2000 -l app.kubernetes.io/name=abc-map-server | jq ".userAgent" | uniq

ls /git
git remote add local /git/config/dot-password-store
git remote add bobosse ssh://bubusse-le-bus.odigodigo.fr:/git/dot-password-store
    cd eclipse-workspace
git remote rm bobosse
cd .password-store
GL
cd ../.ssh
cd /git
mv config/dot-electrum config/dot-gnupg config/dot-kube config/dot-password-store config/dot-ssh .
    rmdir config
mv perso/infra-perso .
    rmdir git/perso
rmdir perso
cd ~/.ssh
git remote add local /git/dot-ssh
cd ../.password-store
git remote add local /git/configdot-password-store
git remote rm local
git remote add local /git/dot-password-store
git pull bobosse master
gco maste
k get pods
watch kubectl get all --all-namespaces
sudo reboot now
sudo pacman -Syu
git-crypt unlock ../keys/PRODUCTION.key
git-crypt lock --all -f
cd ~/m
gc -m "Add calculator"
gl && gp
IP A
cd ~/.password-store
git pull local master
git push local master
htop
gitsearch
history | grep -i youtube-dl > Musique/download.sh
cd Musique
cat download.sh
idea . &
chmod +x download.sh
    ./download.sh
youtube-dl https://www.youtube.com/watch\?v\=X9kQ5zumZww
    cd ~/me
yay -R python2-*
yay -R gitstats-git
yay -R python2-setuptool
yay -R python2-setuptools
yay -R ceph bun celt
yay -R ceph-libs bun celt
yay -R gcalculator-gtk2 python-2
yay -R vmware-workstation icoextract
yay -R vmware-workstation bottles
sudo rm -rf /etc/vmware
yay -R firefox-pwa-bin galculator-gtk2 icoextract
yay -R python2-packaging
yay -R python2-six
yay -R python2 python2-six
yay -R python2-pyparsing
yay -R python2-ordered-set
yay -R python2-appdirs
yay -R python2
ga A
k get nodes
k get events
k top nodes
yay -S gke-gcloud-auth-plugin
gcloud components install gke-gcloud-auth-plugin
yay -S google-cloud-sdk-gke-gcloud-auth-plugin
yay -R mongodb-tools-bin
yay -Syu
git stash apply
    ./format.sh
gc -m "Improve doc"
z abc notes
npm i -g ts-node
ls /home/remo/.volta/tools/image/packages/
tsc --init
npm link
rehash
gc -m "Wip"
rm log.txt
prettier --write packages/frontend/public/index.html
curl https://abc-map.fr | grep -i inline
    gc -m "Try fix"
yarn run build:package
curl http://localhost:10082/index.html | grep -i append
    gc -m "Fix index.html http service"
gco master /home/remo/project/packages/frontend/src/service-worker.ts
gc -m "Restore sw"
gco master
gco -
~/.kube/production-03/k8s-tunnel.sh
k port-forward svc/prometheus-server 9090:80 -n prometheus
abc watch
abc build
abc start
z abc priv
git lg
git reset --hard
sudo pacman -S lutris
grv
git show a8e534a
git stash
node -v
generate-key
git reset
ga src/
npx standard
npx standard src/**/*.tsx
npx standard src/**/*.tsx --fix
npm install eslint --save-dev
rm -rf node_modules
rm -rf package-lock.json
npm run format
npm run format:code
gc -m "Add eslint"
gc -m "Restore i18n"
mv /home/remo/projects/personal-website/src/content cv
mv pandoc-en.yaml pandoc-fr.yaml cv
npm run lint:fix
gc -m "Improve ui, fix build"
ls
volta install node@14
gc -m "Fix build"
yarn run lint:style
gc -m "Minor changes"
z pers web
rm -rf dist .cache .npm-cache .parcel-cache
npm run clean
ip a
ncdu
cd dist
python -m http.server 8000
gc -m "Improve build"
sort-package-json
npm i
npm run bundle-analyze
gc --amend
git commit --amend -m "Improve UI"
yarn run lint-fix
yarn run build
gd HEAD
npm run build:pdf:*
gd
    ./scripts/ci.sh
rm yarn.lock
gc -m "Improve UI"
yarn run
    ./build-try.sh
cd .gitlab
    ./build-push.sh
gc -m "Improve ui, build"
npm run build
cd ..
    npm run build:pdf:en
npm run build:pdf:fr
npm install
npm run lint
yarn run lint
gs
gc -m "Add language selector"
gc -m "Improve notes"
gp
byobu
z perso web
gl
npm run start
ga -A
gss
gc -m "Improve UI"
git clean
clear

]
