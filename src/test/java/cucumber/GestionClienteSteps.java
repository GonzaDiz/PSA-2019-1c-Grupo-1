package cucumber;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import java.util.Collection;

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

    public boolean asign_product(ProductVersion aProduct) {
        if (products.containsKey(aProduct.get_name())){
            return false;
        }
        products.put(aProduct.get_name(),aProduct);
        return true;
    }

    public boolean has_product(ProductVersion aProduct) {
        return products.containsKey(aProduct.get_name());
    }

    public Collection<ProductVersion> getProducts() {
        return products.values();
    }
}

public class GestionClienteSteps {
    ProductVersion aProduct;
    Client aClient;
    private HashMap<String, ProductVersion> expected;

    @Given("Hay un cliente con productos")
    public void hay_un_cliente_con_productos() {
        aClient = new Client("Toyota");
        expected = new HashMap<String,ProductVersion>();
        aClient.asign_product(new ProductVersion("A v1.0"));
        aClient.asign_product(new ProductVersion("B v1.2"));
    }

    @When("es seleccionado")
    public void es_seleccionado() {
        expected.put("A v1.0",new ProductVersion("A v1.0"));
        expected.put("B v1.2",new ProductVersion("B v1.2"));
    }

    @Then("se puede ver un listado de productos que tiene")
    public void se_puede_ver_un_listado_de_productos_que_tiene() {
        Collection<ProductVersion> products = aClient.getProducts();
        for (ProductVersion aProduct: products) {
            Assert.assertTrue(expected.containsKey(aProduct.get_name()));
        }
    }

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
