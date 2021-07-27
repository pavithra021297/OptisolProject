package org.testrunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@src\\test\\resources\\Failed\\failedscenarios.txt", glue = "org.stepdefinition",
dryRun = false, monochrome = false, strict = false, snippets = SnippetType.CAMELCASE, tags = {
		"@Login" })


public class TestReRunner {

}
