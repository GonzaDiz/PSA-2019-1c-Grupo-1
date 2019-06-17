package cucumber;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.util.HashMap;

class ProductVersion {
    private String name;

    public ProductVersion(String name) {
        this.name = name;
    }

    public String get_name() {
        return name;
    }
}

class Client{
    private String name;
    private HashMap<String, ProductVersion> products;

    public Client(String name) {
        this.name = name;
        this.products = new HashMap<String, ProductVersion>();
    }

    public void asign_product(ProductVersion aProduct) {
        products.put(aProduct.get_name(),aProduct);
    }

    public boolean has_product(ProductVersion aProduct) {
        return products.containsKey(aProduct.get_name());
    }
}

public class AsignarSteps {
    ProductVersion aProduct;
    Client aClient;

    @Given("Hay un cliente seleccionado y busco asignarle un implementacion de un proeducto")
    public void Hay_un_cliente_seleccionado_y_busco_asignarle_un_implementacion_de_un_proeducto(){
        aClient = new Client("Toyota");
        aProduct = new ProductVersion("Algo");
    }

    @When("Selecciono el producto")
    public void Selecciono_el_producto(){
        aClient.asign_product(aProduct);
    }

    @Then("La implementacion es asignada el cliente")
    public void La_implementacion_es_asignada_el_cliente(){
        Assert.assertTrue(aClient.has_product(aProduct));
    }
}
