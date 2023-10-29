package edu.dio.angular.java.mensageiros.apps;

public class Telegram extends AplicativosDeMensagem {

  String name = "Telegram";
  
  public void iniciarSistema() {
    System.out.println("Inicializando " + name);
  }
  
  public void enviarMensagem(){
    System.out.println(name + " está enviando uma mensagem");
  }
  public void receberMensagem(){
    System.out.println(name + " recebeu uma nova mensagem");
  }
}
