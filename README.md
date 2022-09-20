## General info
Kontrol Perangkat menggunakan Saweria Webhook. (Biasanya digunakan yang konten tentang atur permainanku misal drop senjata dan sebagainya)

## Library
NodeJS : v16
NPMJS

* [Watch Here](https://github.com/iFika/saweria-controller/wiki/Kode-Script-Donasi) 
## Penggunaannya
* [Watch Here](https://youtu.be/6jJGe0pAhGo) 

## Kode Module yang sering digunakan (Thanks to : NutJS)
### Tiba-tiba Spray (SprayRandom)
```js
await mouse.doubleClick(Button.LEFT);
```
### Drop Senjata Valorant (DropValorant)
```js
await keyboard.pressKey(Key.G);
```
### Tiba-tiba Close dari Game (ForceCloseGame)
```js
 await keyboard.pressKey(Key.LeftAlt, Key.F4);
 await keyboard.releaseKey(Key.LeftAlt, Key.F4)
```
### Menghadap Keatas (UpMouse)
```js
await mouse.move(up(10));
```
### Scroll Senjata All Games (ScrollSenjata)
```js
await mouse.scrollDown(5);
await mouse.scrollUp(5);
```
