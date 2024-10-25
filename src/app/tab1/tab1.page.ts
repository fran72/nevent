import { Component } from '@angular/core';
import { EventInfo } from '../models/event';
import { Tab2Page } from '../tab2/tab2.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  activeBtn = 2;

  eachHourHeight = 120; // height in pixels between two hours in the schedule
  initialHour = 17;  // first hour available in the schedule


  threeDaysData = [
    {id: 1, date: 'Mie, 4/8', data: [
      {id: 1, title: 'Ágora', fullName: 'Escenario ágora', events: [
        {id: 1, title: 'Nio Garcia', subtitle: '18:00 - 19:00', description: 'Luis Antonio Quiñones García, conocido por su nombre artístico Nio García o Che Robótico, es un rapero, compositor y bailarín puertorriqueño.', start: {hour: 18, mins: 0}, end: {hour: 19, mins: 0}, url:'../../assets/events-images/nio.jpg', brand:' '},
        {id: 2, title: 'Refill time', subtitle: 'Barra 3', description: 'Tiempo para recargar las bebidas.', start: {hour: 19, mins: 0}, end: {hour: 20, mins: 0}, url:'../../assets/events-images/refill.jpg', brand:'../../assets/events-images/estrella-brand.png'},
        {id: 3, title: 'Bad Bunny', subtitle: '20:00 - 22:00', description: 'Benito Antonio Martínez Ocasio ​conocido artísticamente como Bad Bunny, es un cantante, compositor, productor discográfico y luchador puertorriqueño.​Caracterizado por su entonación grave, se especializa en estilos musicales como reguetón y trap latino, aunque también ha interpretado otros géneros y estilos variados.', start: {hour: 20, mins: 0}, end: {hour: 22, mins: 0}, url:'../../assets/events-images/bad.jpg', brand:' '}
      ]},
      {id: 2, title: 'Electro', fullName: 'Sala electro', events: [
        {id: 1, title: 'Steve Aoki', subtitle: '17:30 - 18:30', description: 'Steven Hiroyuki Aoki, más conocido como Steve Aoki, es un DJ, remezclador y productor discográfico estadounidense de ascendencia japonesa, y también propietario de Dim Mak Records. En 2011, debutó en la lista Top 100 DJs de la revista DJ Mag, ingresando directamente al puesto #42.', start:  {hour: 17, mins: 30}, end: {hour: 18, mins: 30}, url:'../../assets/events-images/steve.jpg', brand:' '},
        {id: 2, title: 'Hardwell', subtitle: '18:30 - 20:30', description: 'Robbert van de Corput, conocido por su nombre artístico Hardwell, es un DJ, remezclador y productor discográfico neerlandés, dueño de Revealed Recordings. En 2013 y 2014 fue considerado el DJ #1 del mundo según la encuesta anual que realiza la revista DJ Mag.​ ', start: {hour: 18, mins: 30}, end: {hour: 20, mins: 30}, url:'../../assets/events-images/hard.jpg', brand:' '},
        {id: 3, title: 'Vicio', subtitle: 'Ágora', description: 'Hamburguesas Vicio, ven a probarnos.', start: {hour: 20, mins: 30}, end: {hour: 22, mins: 30}, url:'../../assets/events-images/vicio.jpg', brand:'../../assets/events-images/vicio-brand.png'}
      ]},
      {id: 3, title: 'Fábrica', fullName: 'Fábrica de hielo', events: [
        {id: 1, title: 'Mike Towers', subtitle: '20:00 - 22:00', description: 'Michael Anthony Torres Monge, conocido artísticamente como Myke Towers, es un cantante y compositor puertorriqueño de reguetón y trap latino.', start: {hour: 20, mins: 0}, end: {hour: 22, mins: 0}, url:'../../assets/events-images/mike.jpg', brand:' '},
        {id: 2, title: 'Refill time', subtitle: 'Barra 3', description: 'Tiempo para recargar las bebidas.', start: {hour: 19, mins: 0}, end: {hour: 20, mins: 0}, url:'../../assets/events-images/refill.jpg', brand:'../../assets/events-images/estrella-brand.png'},
      ]},
    ]},
    {id: 1, date: 'Jue, 5/8', data: [
      {id: 1, title: 'Ágora', fullName: 'Escenario ágora', events: [
        {id: 1, title: 'Abraham Mateo', subtitle: '18:00 - 19:00', description: 'Abraham Mateo Chamorro ​ es un cantante, compositor, productor y actor español. Con apenas 14 años de edad alcanzó popularidad en España con el tema «Señorita», el cual se mantuvo durante casi un año como uno de los sencillos más vendidos en dicho país.​​​', start:  {hour: 18, mins: 0}, end: {hour: 19, mins: 0}, url:'../../assets/events-images/abraham.jpg', brand:' '},
        {id: 2, title: 'Ozuna', subtitle: '19:00 - 20:00', description: 'Juan Carlos Ozuna Rosado, conocido simplemente como Ozuna, es un cantante, compositor, actor y deportista puertorriqueño de ascendencia dominicana.', start: {hour: 19, mins: 0}, end: {hour: 20, mins: 0}, url:'../../assets/events-images/ozuna.jpg', brand:' '},
      ]},
      {id: 2, title: 'Electro', fullName: 'Sala electro', events: [
        {id: 1, title: 'Karol G', subtitle: '18:00 - 19:00', description: 'Carolina Giraldo Navarro conocida artísticamente como Karol G, es una cantante, compositora y empresaria colombiana. Su carrera se ha destacado por emplear los géneros de reguetón y pop urbano, aunque también ha incursionado con otros estilos musicales urbanos y latinoamericanos.', start:  {hour: 18, mins: 0}, end: {hour: 19, mins: 0}, url:'../../assets/events-images/karol.jpg', brand:' '},
        {id: 2, title: 'Coffee time', subtitle: 'Free coffee', description: 'Descanso para tomar un café.', start: {hour: 19, mins: 0}, end: {hour: 20, mins: 0}, url:'../../assets/events-images/coffee.jpg', brand:' '},
      ]},
      {id: 3, title: 'Fábrica', fullName: 'Fábrica de hielo', events: [
        {id: 1, title: 'Lola Indigo', subtitle: '19:00 - 20:00', description: 'Miriam Doblas Muñoz, conocida como Lola Índigo, ​​ es una cantante y bailarina española, que saltó a la fama después de concursar en OT 2017, alcanzando en su primer sencillo post-concurso ...', start: {hour: 19, mins: 0}, end: {hour: 20, mins: 0}, url:'../../assets/events-images/lola.jpg', brand:' '},
      ]},
    ]},
    {id: 1, date: 'Vie, 6/8', data: [
      {id: 1, title: 'Ágora', fullName: 'Escenario ágora', events: [
        {id: 1, title: 'Omar Montes', subtitle: '18:00 - 19:00', description: 'Omar Ismael Montes Moreno es un exboxeador, cantante y personaje mediático español que se dio a conocer por sus apariciones en programas de televisión como Mujeres y hombres y viceversa, Gran Hermano VIP y Supervivientes, ​ así como por su relación con Isa Pantoja, hija de Isabel Pantoja.​', start:  {hour: 18, mins: 0}, end: {hour: 19, mins: 0}, url:'../../assets/events-images/omar.jpg', brand:' '},
      ]},
      {id: 2, title: 'Electro', fullName: 'Sala electro', events: [
        {id: 1, title: 'Ana Mena', subtitle: '18:00 - 19:00', description: 'Ana Mena Rojas es una cantante, actriz y modelo española. Se dio a conocer en 2006 tras ganar la duodécima edición autonómica de los Premios Veo Veo, aunque su popularidad aumentó cuando protagonizó la miniserie Marisol, la película en 2009.​​​', start:  {hour: 18, mins: 0}, end: {hour: 19, mins: 0}, url:'../../assets/events-images/ana.jpg', brand:' '},
        {id: 2, title: 'Coffee time', subtitle: 'Free coffee', description: 'Descanso para tomar un café.', start: {hour: 19, mins: 0}, end: {hour: 20, mins: 0}, url:'../../assets/events-images/coffee.jpg', brand:' '},
      ]},
      {id: 3, title: 'Fábrica', fullName: 'Fábrica de hielo', events: [
        {id: 1, title: 'Heineken day', subtitle: 'Free beers', description: 'Ven a probrar la nueva Heineken.', start: {hour: 19, mins: 0}, end: {hour: 20, mins: 0}, url:'../../assets/events-images/heineken.jpg', brand:' '},
      ]},
    ]}
  ];

  dummyData = this.threeDaysData[0];

    
  constructor(public modalController: ModalController,) {}

  getContainerHeight(){
    var num = (24 - this.initialHour) * this.eachHourHeight;
    return {height: `${num}px`};
  }

  getTotalBlockSpaces(){
    const totalBlocks = 24 - this.initialHour;
    var hours = Array(totalBlocks).fill(totalBlocks).map((x,i)=>i+this.initialHour);
    return hours;
  }

  getBlockHeight(){
    return {height: `${this.eachHourHeight}px`};
  }

  getEventDynamicStyle(event: EventInfo){
    const eventHeight = (event.end.hour - event.start.hour) * this.eachHourHeight;

    const marginTopByHour = (event.start.hour - this.initialHour) * this.eachHourHeight;
    const marginTopByMins = (event.start.mins > 0) ? ((this.eachHourHeight * event.start.mins) / 60) : 0;
    const marginTopInColumn = marginTopByHour + marginTopByMins;

    return {'height': `${eventHeight}px`,'margin-top': `${marginTopInColumn}px`};
  }

  activate(index: number){
    this.activeBtn = index;
    this.dummyData = this.threeDaysData[index];
  }

  getWithByColumns(){
    var num = this.dummyData.data.length * 150; // 150px is the width of each column
    return {width: `${num}px`};
  }






  async goToDetails(event: EventInfo, date: string, fullName: string) {
    const openModal = await this.modalController.create({
      component: Tab2Page,
      componentProps: {
        event: event,
        date: date,
        fullName: fullName,
      }
    });

    openModal.onDidDismiss().then(() => {
    });
    openModal.present();
  }

}
