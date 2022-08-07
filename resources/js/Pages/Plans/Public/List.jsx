import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/inertia-react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";
import PlanItem from "@/Components/PlanItem";

export default function List(props) {
    const { data: plans, meta, links } = props.plans;
    return (
        <div>
            <Head title="Plans" />
            <Header
                title="Our Planss"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium quam sint repudiandae aliquam rerum nisi eum repellendus minima optio, delectus expedita enim tempore. Aliquam omnis eligendi velit laboriosam suscipit."
            />
            <Container>
                {plans.length ? (
                    <div className="grid grid-cols-2 gap-2 md:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {plans.map((plan) => (
                            <PlanItem plan={plan} key={plan.id} />
                        ))}
                    </div>
                ) : null}
                
                <Pagination meta={meta} links={links}/>
            </Container>
        </div>
    );
}

List.layout = (page) => <App children={page}></App>;
